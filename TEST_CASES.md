# Zoho Cliq Chat — Attachment Copy Test Cases

## Scope and test data

Run the cases in a one-to-one chat and a group chat, using a user who can send
attachments. Use files containing plain text, Unicode characters, blank lines,
long lines, and a final newline so that copied and opened content can be
compared byte-for-byte with the source.

| File | Expected detected content type | Copy supported |
| --- | --- | --- |
| `sample.txt` | `text/plain` | Yes |
| `sample.js` | `text/javascript` | Yes |
| `sample.ts` | `text/typescript` | Yes |
| `sample.py` | `text/x-python` | Yes |
| `sample.java` | `text/x-java` | Yes |
| `sample.c` | `text/x-c` | Yes |
| `sample.cpp` | `text/x-c++` | Yes |
| `sample.html` | `text/html` | Yes |
| `sample.css` | `text/css` | Yes |
| `sample.csv` | `text/csv` | Yes |
| `sample.md` | `text/markdown` | Yes |
| `sample.json` | `text/json` | Yes |
| `sample.xml` | `text/xml` | Yes |
| `sample.eml` | `message/rfc822` | Yes |
| `sample.xml` | `application/xml` | Yes |
| `sample.sh` | `application/x-sh` | Yes |
| `sample.bash` | `application/x-sh` | Yes |
| `sample.png`, `sample.pdf`, `sample.zip`, and a binary file | Their native binary type | No |

The same XML file is tested twice with the server returning `text/xml` and
`application/xml`.

## Functional test cases

| ID | Test | Steps | Expected result |
| --- | --- | --- | --- |
| ATT-001 | Copy button for supported text extensions | Send each supported file from the data table. Open the attachment preview. | The attachment renders with the correct thumbnail and a visible **Copy** button. |
| ATT-002 | Copy button for `.eml` | Send a valid email file with headers and body. Open it. | The file is treated as `message/*`; **Copy** is visible and the email content is readable. |
| ATT-003 | XML MIME-type detection | Send the XML fixture once as `text/xml` and once as `application/xml`. | Both messages show the attachment renderer and **Copy** button; MIME detection does not incorrectly classify either as unsupported. |
| ATT-004 | Shell-script MIME-type detection | Send `.sh` and `.bash` fixtures. | Both show **Copy** when detected as `application/x-sh`. |
| ATT-005 | Unsupported attachment controls | Send the unsupported files listed in the data table and open each preview. | **Copy** is not displayed. Existing preview/download controls remain available and usable. |
| ATT-006 | Copy complete content | For every supported file, click **Copy** once and read the clipboard in a plain-text editor or clipboard assertion. | Clipboard content exactly matches the complete source file, including punctuation, whitespace, Unicode, line endings represented by the product, and the final newline. |
| ATT-007 | Copy does not truncate long content | Repeat ATT-006 with a file larger than the preview viewport and with long lines. | The clipboard contains all content, not only the visible portion; no duplicated or missing lines occur. |
| ATT-008 | Repeated copy action | Click **Copy** repeatedly on the same supported attachment. | Each operation succeeds, produces the same content, and does not append duplicate content or alter the message. |
| ATT-009 | Copy error handling | Deny clipboard permission or run in a browser where the Clipboard API is unavailable, then click **Copy**. | The UI fails gracefully with the product’s error feedback; no content is silently corrupted or exposed elsewhere. |
| ATT-010 | Open complete attachment | Open each supported attachment and inspect from the first through the last character. | Complete content is displayed without formatting loss, omitted sections, injected markup, or unexpected escaping. |
| ATT-011 | Download remains correct | Download every supported and unsupported attachment and compare it with the original fixture. | Downloaded filename, extension, bytes, and content remain correct. |

## Rendering optimization and placement

| ID | Test | Steps | Expected result |
| --- | --- | --- | --- |
| ATT-012 | Text/code files render as attachments | Send supported text/code files that were previously rendered as inline snippets. | They are rendered as attachment cards rather than direct snippets, with the appropriate thumbnail and **Copy** button. |
| ATT-013 | Existing snippets still support Copy | Locate or send a message that remains a text/code snippet in each supported display area. Click **Copy**. | **Copy** is present where supported and copies the complete snippet, not just visible lines. |
| ATT-014 | Copy in one-to-one chat | Execute ATT-001 and ATT-006 in a one-to-one chat on desktop and mobile/responsive layouts. | Visibility, click behavior, and clipboard content are correct in every layout. |
| ATT-015 | Copy in group chat | Execute ATT-001 and ATT-006 in a group chat, including messages from another participant. | The same supported/unsupported rules apply; the correct attachment is copied. |
| ATT-016 | Copy from message history | Reload the chat, scroll to an older supported attachment, and use **Copy** and **Open**. | Controls remain available and operate on the complete persisted file content. |
| ATT-017 | Multiple attachments in one message | Send a message containing several supported and unsupported files. Use each attachment’s controls. | Controls are scoped to the selected card; supported files have **Copy**, unsupported files do not, and no file’s content is mixed with another’s. |

## Regression and compatibility

| ID | Test | Steps | Expected result |
| --- | --- | --- | --- |
| ATT-018 | Image attachment regression | Send PNG/JPEG/GIF images and use preview, download, and existing interactions. | Image thumbnails, previews, downloads, and interactions are unchanged; **Copy** is absent. |
| ATT-019 | PDF/document regression | Send PDF and another supported document type. Open and download them. | Existing preview, download, and interaction behavior is unchanged; **Copy** is absent unless the detected type is explicitly supported. |
| ATT-020 | Archive/binary regression | Send ZIP and a representative binary file. | Files remain downloadable/openable through existing flows, with no **Copy** button and no UI errors. |
| ATT-021 | Upload and send regression | Send supported and unsupported files using each available upload path, then reload. | Upload validation, progress, message delivery, filenames, and persistence continue to work. |
| ATT-022 | Permission and access regression | View supported and unsupported attachments as sender, recipient, and a user without access to the chat. | Authorization behavior is unchanged; **Copy** never bypasses access controls. |
| ATT-023 | Cross-browser regression | Run ATT-001, ATT-005, ATT-006, and ATT-010 in the supported desktop browsers and mobile browser. | Rendering, button visibility, opening, and copying are consistent; browser-specific clipboard limitations show the expected fallback. |

## Exit criteria

All supported MIME/extension combinations pass visibility, copy, and complete
content checks; unsupported types never show **Copy**; snippet-to-attachment
rendering is verified in every applicable chat surface; and all regression
cases pass without changes to existing attachment behavior.
