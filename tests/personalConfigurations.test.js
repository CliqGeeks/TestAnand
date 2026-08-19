/**
 * Test Suite: Settings > Personal Configurations
 *
 * Covers the UI and behavior of the Personal Configurations panel
 * as shown in the application settings screen.
 *
 * Framework assumptions: Jest + React Testing Library + @testing-library/user-event
 */

describe('Settings - Personal Configurations', () => {

  // ─── Navigation ────────────────────────────────────────────────────────────

  describe('Navigation', () => {
    test('TC-PC-001: Settings panel should display four navigation items: Advanced, Device settings, Personal Configurations, Network Performance', () => {
      const expectedItems = ['Advanced', 'Device settings', 'Personal Configurations', 'Network Performance'];
      expectedItems.forEach(item => {
        expect(screen.getByText(item)).toBeVisible();
      });
    });

    test('TC-PC-002: Clicking "Personal Configurations" in the sidebar should highlight it as the active section', () => {
      userEvent.click(screen.getByText('Personal Configurations'));
      expect(screen.getByText('Personal Configurations')).toHaveClass('active');
    });

    test('TC-PC-003: Clicking "Advanced" should navigate away from Personal Configurations', () => {
      userEvent.click(screen.getByText('Advanced'));
      expect(screen.queryByTestId('personal-configurations-panel')).not.toBeInTheDocument();
    });

    test('TC-PC-004: Clicking the close (X) button should dismiss the Settings panel', () => {
      userEvent.click(screen.getByRole('button', { name: /close/i }));
      expect(screen.queryByRole('dialog', { name: /settings/i })).not.toBeInTheDocument();
    });
  });

  // ─── Page Header & Description ─────────────────────────────────────────────

  describe('Page Header', () => {
    test('TC-PC-005: Personal Configurations panel header should read "Personal Configurations"', () => {
      expect(screen.getByRole('heading', { name: 'Personal Configurations' })).toBeVisible();
    });

    test('TC-PC-006: Description text should inform the user that settings are personal and will be reflected only for them', () => {
      expect(
        screen.getByText(/configure the below meeting settings as per your needs.*reflected only for you/i)
      ).toBeVisible();
    });
  });

  // ─── Toggle: Show new message notification pop-ups ─────────────────────────

  describe('Toggle - Show new message notification pop-ups', () => {
    test('TC-PC-007: Toggle should be present and labelled correctly', () => {
      expect(screen.getByLabelText(/show new message notification pop-ups/i)).toBeInTheDocument();
    });

    test('TC-PC-008: Toggle default state should be OFF', () => {
      expect(screen.getByLabelText(/show new message notification pop-ups/i)).not.toBeChecked();
    });

    test('TC-PC-009: Clicking the toggle should turn it ON', () => {
      const toggle = screen.getByLabelText(/show new message notification pop-ups/i);
      userEvent.click(toggle);
      expect(toggle).toBeChecked();
    });

    test('TC-PC-010: Clicking the toggle again should turn it back OFF', () => {
      const toggle = screen.getByLabelText(/show new message notification pop-ups/i);
      userEvent.click(toggle); // ON
      userEvent.click(toggle); // OFF
      expect(toggle).not.toBeChecked();
    });
  });

  // ─── Toggle: Show every participant's name even during screen inactivity ────

  describe("Toggle - Show every participant's name even during screen inactivity", () => {
    test("TC-PC-011: Toggle should be present and labelled correctly", () => {
      expect(
        screen.getByLabelText(/show every participant's name even during screen inactivity/i)
      ).toBeInTheDocument();
    });

    test("TC-PC-012: Toggle default state should be OFF", () => {
      expect(
        screen.getByLabelText(/show every participant's name even during screen inactivity/i)
      ).not.toBeChecked();
    });

    test("TC-PC-013: Clicking the toggle should turn it ON", () => {
      const toggle = screen.getByLabelText(/show every participant's name even during screen inactivity/i);
      userEvent.click(toggle);
      expect(toggle).toBeChecked();
    });

    test("TC-PC-014: Clicking the toggle again should turn it back OFF", () => {
      const toggle = screen.getByLabelText(/show every participant's name even during screen inactivity/i);
      userEvent.click(toggle); // ON
      userEvent.click(toggle); // OFF
      expect(toggle).not.toBeChecked();
    });
  });

  // ─── Toggle: Notify when I start talking with the mic on mute ───────────────

  describe('Toggle - Notify when I start talking with the mic on mute', () => {
    test('TC-PC-015: Toggle should be present and labelled correctly', () => {
      expect(
        screen.getByLabelText(/notify when i start talking with the mic on mute/i)
      ).toBeInTheDocument();
    });

    test('TC-PC-016: Toggle default state should be ON', () => {
      expect(
        screen.getByLabelText(/notify when i start talking with the mic on mute/i)
      ).toBeChecked();
    });

    test('TC-PC-017: Clicking the toggle should turn it OFF', () => {
      const toggle = screen.getByLabelText(/notify when i start talking with the mic on mute/i);
      userEvent.click(toggle);
      expect(toggle).not.toBeChecked();
    });

    test('TC-PC-018: Clicking the toggle again should turn it back ON', () => {
      const toggle = screen.getByLabelText(/notify when i start talking with the mic on mute/i);
      userEvent.click(toggle); // OFF
      userEvent.click(toggle); // ON
      expect(toggle).toBeChecked();
    });
  });

  // ─── Toggle: Enable audio enhancement for calls and meetings ────────────────

  describe('Toggle - Enable audio enhancement for calls and meetings', () => {
    test('TC-PC-019: Toggle should be present and labelled correctly', () => {
      expect(
        screen.getByLabelText(/enable audio enhancement for calls and meetings/i)
      ).toBeInTheDocument();
    });

    test('TC-PC-020: Toggle default state should be ON', () => {
      expect(
        screen.getByLabelText(/enable audio enhancement for calls and meetings/i)
      ).toBeChecked();
    });

    test('TC-PC-021: An info (ⓘ) icon should be visible next to the label', () => {
      expect(screen.getByTestId('audio-enhancement-info-icon')).toBeVisible();
    });

    test('TC-PC-022: Hovering over the info icon should display a tooltip', async () => {
      userEvent.hover(screen.getByTestId('audio-enhancement-info-icon'));
      expect(await screen.findByRole('tooltip')).toBeVisible();
    });

    test('TC-PC-023: Clicking the toggle should turn it OFF', () => {
      const toggle = screen.getByLabelText(/enable audio enhancement for calls and meetings/i);
      userEvent.click(toggle);
      expect(toggle).not.toBeChecked();
    });

    test('TC-PC-024: Clicking the toggle again should turn it back ON', () => {
      const toggle = screen.getByLabelText(/enable audio enhancement for calls and meetings/i);
      userEvent.click(toggle); // OFF
      userEvent.click(toggle); // ON
      expect(toggle).toBeChecked();
    });
  });

  // ─── Toggle: Show profile picture while streaming or recording ──────────────

  describe('Toggle - Show profile picture while streaming or recording', () => {
    test('TC-PC-025: Toggle should be present and labelled correctly', () => {
      expect(
        screen.getByLabelText(/show profile picture while streaming or recording/i)
      ).toBeInTheDocument();
    });

    test('TC-PC-026: Toggle default state should be ON', () => {
      expect(
        screen.getByLabelText(/show profile picture while streaming or recording/i)
      ).toBeChecked();
    });

    test('TC-PC-027: An info (ⓘ) icon should be visible next to the label', () => {
      expect(screen.getByTestId('profile-picture-info-icon')).toBeVisible();
    });

    test('TC-PC-028: Hovering over the info icon should display a tooltip', async () => {
      userEvent.hover(screen.getByTestId('profile-picture-info-icon'));
      expect(await screen.findByRole('tooltip')).toBeVisible();
    });

    test('TC-PC-029: Clicking the toggle should turn it OFF', () => {
      const toggle = screen.getByLabelText(/show profile picture while streaming or recording/i);
      userEvent.click(toggle);
      expect(toggle).not.toBeChecked();
    });

    test('TC-PC-030: Clicking the toggle again should turn it back ON', () => {
      const toggle = screen.getByLabelText(/show profile picture while streaming or recording/i);
      userEvent.click(toggle); // OFF
      userEvent.click(toggle); // ON
      expect(toggle).toBeChecked();
    });
  });

  // ─── Toggle: Auto switch to picture-in-picture during calls/meetings ────────

  describe('Toggle - Auto switch to picture-in-picture during calls/meetings', () => {
    test('TC-PC-031: Toggle should be present and labelled correctly', () => {
      expect(
        screen.getByLabelText(/auto switch to picture-in-picture during calls\/meetings/i)
      ).toBeInTheDocument();
    });

    test('TC-PC-032: Toggle default state should be OFF', () => {
      expect(
        screen.getByLabelText(/auto switch to picture-in-picture during calls\/meetings/i)
      ).not.toBeChecked();
    });

    test('TC-PC-033: An info (ⓘ) icon should be visible next to the label', () => {
      expect(screen.getByTestId('pip-info-icon')).toBeVisible();
    });

    test('TC-PC-034: Hovering over the info icon should display a tooltip', async () => {
      userEvent.hover(screen.getByTestId('pip-info-icon'));
      expect(await screen.findByRole('tooltip')).toBeVisible();
    });

    test('TC-PC-035: Clicking the toggle should turn it ON', () => {
      const toggle = screen.getByLabelText(/auto switch to picture-in-picture during calls\/meetings/i);
      userEvent.click(toggle);
      expect(toggle).toBeChecked();
    });

    test('TC-PC-036: Clicking the toggle again should turn it back OFF', () => {
      const toggle = screen.getByLabelText(/auto switch to picture-in-picture during calls\/meetings/i);
      userEvent.click(toggle); // ON
      userEvent.click(toggle); // OFF
      expect(toggle).not.toBeChecked();
    });
  });

  // ─── Recordings Section ──────────────────────────────────────────────────────

  describe('Recordings Section', () => {
    test('TC-PC-037: "Recordings" section header should be visible', () => {
      expect(screen.getByText('Recordings')).toBeVisible();
    });

    test('TC-PC-038: "Meeting Recording" label should be visible', () => {
      expect(screen.getByText('Meeting Recording')).toBeVisible();
    });

    test('TC-PC-039: Three radio options should be rendered: "Record all meetings", "Do not record", "Use my last preference"', () => {
      expect(screen.getByLabelText('Record all meetings')).toBeInTheDocument();
      expect(screen.getByLabelText('Do not record')).toBeInTheDocument();
      expect(screen.getByLabelText('Use my last preference')).toBeInTheDocument();
    });

    test('TC-PC-040: Default selected radio option should be "Use my last preference"', () => {
      expect(screen.getByLabelText('Use my last preference')).toBeChecked();
      expect(screen.getByLabelText('Record all meetings')).not.toBeChecked();
      expect(screen.getByLabelText('Do not record')).not.toBeChecked();
    });

    test('TC-PC-041: Selecting "Record all meetings" should check that option and uncheck others', () => {
      userEvent.click(screen.getByLabelText('Record all meetings'));
      expect(screen.getByLabelText('Record all meetings')).toBeChecked();
      expect(screen.getByLabelText('Do not record')).not.toBeChecked();
      expect(screen.getByLabelText('Use my last preference')).not.toBeChecked();
    });

    test('TC-PC-042: Selecting "Do not record" should check that option and uncheck others', () => {
      userEvent.click(screen.getByLabelText('Do not record'));
      expect(screen.getByLabelText('Do not record')).toBeChecked();
      expect(screen.getByLabelText('Record all meetings')).not.toBeChecked();
      expect(screen.getByLabelText('Use my last preference')).not.toBeChecked();
    });

    test('TC-PC-043: Selecting "Use my last preference" after changing should restore it as checked', () => {
      userEvent.click(screen.getByLabelText('Record all meetings'));
      userEvent.click(screen.getByLabelText('Use my last preference'));
      expect(screen.getByLabelText('Use my last preference')).toBeChecked();
      expect(screen.getByLabelText('Record all meetings')).not.toBeChecked();
    });

    test('TC-PC-044: Only one radio option should be selectable at a time', () => {
      const radios = screen.getAllByRole('radio');
      const checkedCount = radios.filter(r => r.checked).length;
      expect(checkedCount).toBe(1);
    });
  });

  // ─── Recordings Note ─────────────────────────────────────────────────────────

  describe('Recordings Note', () => {
    test('TC-PC-045: Note box should be visible in the Recordings section', () => {
      expect(screen.getByTestId('recordings-note')).toBeVisible();
    });

    test('TC-PC-046: Note should contain bold "Note:" label', () => {
      const note = screen.getByTestId('recordings-note');
      expect(note).toHaveTextContent(/Note:/);
    });

    test('TC-PC-047: Note text should explain that the setting applies by default to meetings the user hosts', () => {
      expect(
        screen.getByText(/this setting will be reflected by default for the meetings you host/i)
      ).toBeVisible();
    });

    test('TC-PC-048: Note text should mention that preference can still be changed while starting the meeting', () => {
      expect(
        screen.getByText(/you can still change your preference while starting the meeting/i)
      ).toBeVisible();
    });

    test('TC-PC-049: A lightbulb/hint icon should be displayed alongside the note', () => {
      expect(screen.getByTestId('note-icon')).toBeVisible();
    });
  });

  // ─── Persistence ─────────────────────────────────────────────────────────────

  describe('Persistence', () => {
    test('TC-PC-050: Toggle changes should persist after closing and reopening the Settings panel', async () => {
      const toggle = screen.getByLabelText(/show new message notification pop-ups/i);
      userEvent.click(toggle); // turn ON (was OFF)
      userEvent.click(screen.getByRole('button', { name: /close/i }));
      userEvent.click(screen.getByRole('button', { name: /open settings/i }));
      userEvent.click(screen.getByText('Personal Configurations'));
      expect(screen.getByLabelText(/show new message notification pop-ups/i)).toBeChecked();
    });

    test('TC-PC-051: Meeting Recording radio selection should persist after closing and reopening the Settings panel', async () => {
      userEvent.click(screen.getByLabelText('Record all meetings'));
      userEvent.click(screen.getByRole('button', { name: /close/i }));
      userEvent.click(screen.getByRole('button', { name: /open settings/i }));
      userEvent.click(screen.getByText('Personal Configurations'));
      expect(screen.getByLabelText('Record all meetings')).toBeChecked();
    });
  });

  // ─── Accessibility ────────────────────────────────────────────────────────────

  describe('Accessibility', () => {
    test('TC-PC-052: All toggles should have accessible roles (switch or checkbox)', () => {
      const toggles = screen.getAllByRole('switch');
      expect(toggles.length).toBeGreaterThanOrEqual(6);
    });

    test('TC-PC-053: All toggles should be keyboard-focusable', () => {
      screen.getAllByRole('switch').forEach(toggle => {
        toggle.focus();
        expect(toggle).toHaveFocus();
      });
    });

    test('TC-PC-054: Pressing Space on a focused toggle should change its state', () => {
      const toggle = screen.getByLabelText(/show new message notification pop-ups/i);
      toggle.focus();
      const before = toggle.checked;
      userEvent.keyboard(' ');
      expect(toggle.checked).toBe(!before);
    });

    test('TC-PC-055: All radio buttons should be keyboard-focusable', () => {
      screen.getAllByRole('radio').forEach(radio => {
        radio.focus();
        expect(radio).toHaveFocus();
      });
    });

    test('TC-PC-056: The close (X) button should be reachable via Tab key navigation', () => {
      const closeBtn = screen.getByRole('button', { name: /close/i });
      closeBtn.focus();
      expect(closeBtn).toHaveFocus();
    });

    test('TC-PC-057: Panel should have no critical ARIA accessibility violations', async () => {
      // Assumes axe-core or jest-axe is configured
      const { container } = render(<PersonalConfigurations />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  // ─── Visual / Layout ─────────────────────────────────────────────────────────

  describe('Visual / Layout', () => {
    test('TC-PC-058: There should be exactly 6 toggle switches on the panel', () => {
      expect(screen.getAllByRole('switch')).toHaveLength(6);
    });

    test('TC-PC-059: There should be exactly 3 radio buttons in the Recordings section', () => {
      expect(screen.getAllByRole('radio')).toHaveLength(3);
    });

    test('TC-PC-060: The panel title "Personal Configurations" should appear in both the sidebar and the panel header', () => {
      const matches = screen.getAllByText('Personal Configurations');
      expect(matches.length).toBeGreaterThanOrEqual(2);
    });
  });

});
