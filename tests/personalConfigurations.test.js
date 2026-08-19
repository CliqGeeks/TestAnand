/**
 * Test Suite: Settings > Personal Configurations
 *
 * Covers the UI and behavior of the Personal Configurations panel
 * as shown in the application settings screen.
 */

describe('Settings - Personal Configurations', () => {

  // ─── Navigation ────────────────────────────────────────────────────────────

  describe('Navigation', () => {
    test('Verify Settings panel displays Advanced navigation item');
    test('Verify Settings panel displays Device settings navigation item');
    test('Verify Settings panel displays Personal Configurations navigation item');
    test('Verify Settings panel displays Network Performance navigation item');
    test('Verify clicking Personal Configurations in the sidebar highlights it as active');
    test('Verify clicking Advanced navigates away from Personal Configurations');
    test('Verify clicking the close button dismisses the Settings panel');
  });

  // ─── Page Header & Description ─────────────────────────────────────────────

  describe('Page Header', () => {
    test('Verify Personal Configurations panel header text reads Personal Configurations');
    test('Verify description text is displayed below the header');
  });

  // ─── Toggle: Show new message notification pop-ups ─────────────────────────

  describe('Toggle - Show new message notification pop-ups', () => {
    test('Verify Show new message notification pop-ups toggle is displayed');
    test('Verify Show new message notification pop-ups toggle default state is OFF');
    test('Verify Show new message notification pop-ups toggle turns ON when clicked');
    test('Verify Show new message notification pop-ups toggle turns OFF when clicked again');
  });

  // ─── Toggle: Show every participant's name even during screen inactivity ────

  describe("Toggle - Show every participant's name even during screen inactivity", () => {
    test("Verify Show every participant's name even during screen inactivity toggle is displayed");
    test("Verify Show every participant's name even during screen inactivity toggle default state is OFF");
    test("Verify Show every participant's name even during screen inactivity toggle turns ON when clicked");
    test("Verify Show every participant's name even during screen inactivity toggle turns OFF when clicked again");
  });

  // ─── Toggle: Notify when I start talking with the mic on mute ───────────────

  describe('Toggle - Notify when I start talking with the mic on mute', () => {
    test('Verify Notify when I start talking with the mic on mute toggle is displayed');
    test('Verify Notify when I start talking with the mic on mute toggle default state is ON');
    test('Verify Notify when I start talking with the mic on mute toggle turns OFF when clicked');
    test('Verify Notify when I start talking with the mic on mute toggle turns ON when clicked again');
  });

  // ─── Toggle: Enable audio enhancement for calls and meetings ────────────────

  describe('Toggle - Enable audio enhancement for calls and meetings', () => {
    test('Verify Enable audio enhancement for calls and meetings toggle is displayed');
    test('Verify Enable audio enhancement for calls and meetings toggle default state is ON');
    test('Verify Enable audio enhancement for calls and meetings info icon is displayed');
    test('Verify Enable audio enhancement for calls and meetings info icon tooltip appears on hover');
    test('Verify Enable audio enhancement for calls and meetings toggle turns OFF when clicked');
    test('Verify Enable audio enhancement for calls and meetings toggle turns ON when clicked again');
  });

  // ─── Toggle: Show profile picture while streaming or recording ──────────────

  describe('Toggle - Show profile picture while streaming or recording', () => {
    test('Verify Show profile picture while streaming or recording toggle is displayed');
    test('Verify Show profile picture while streaming or recording toggle default state is ON');
    test('Verify Show profile picture while streaming or recording info icon is displayed');
    test('Verify Show profile picture while streaming or recording info icon tooltip appears on hover');
    test('Verify Show profile picture while streaming or recording toggle turns OFF when clicked');
    test('Verify Show profile picture while streaming or recording toggle turns ON when clicked again');
  });

  // ─── Toggle: Auto switch to picture-in-picture during calls/meetings ────────

  describe('Toggle - Auto switch to picture-in-picture during calls/meetings', () => {
    test('Verify Auto switch to picture-in-picture during calls/meetings toggle is displayed');
    test('Verify Auto switch to picture-in-picture during calls/meetings toggle default state is OFF');
    test('Verify Auto switch to picture-in-picture during calls/meetings info icon is displayed');
    test('Verify Auto switch to picture-in-picture during calls/meetings info icon tooltip appears on hover');
    test('Verify Auto switch to picture-in-picture during calls/meetings toggle turns ON when clicked');
    test('Verify Auto switch to picture-in-picture during calls/meetings toggle turns OFF when clicked again');
  });

  // ─── Recordings Section ──────────────────────────────────────────────────────

  describe('Recordings Section', () => {
    test('Verify Recordings section header is displayed');
    test('Verify Meeting Recording label is displayed');
    test('Verify Record all meetings radio button is displayed');
    test('Verify Do not record radio button is displayed');
    test('Verify Use my last preference radio button is displayed');
    test('Verify Use my last preference radio button is selected by default');
    test('Verify Record all meetings radio button is not selected by default');
    test('Verify Do not record radio button is not selected by default');
    test('Verify selecting Record all meetings radio button checks it and unchecks others');
    test('Verify selecting Do not record radio button checks it and unchecks others');
    test('Verify selecting Use my last preference radio button checks it and unchecks others');
    test('Verify only one radio button can be selected at a time');
  });

  // ─── Recordings Note ─────────────────────────────────────────────────────────

  describe('Recordings Note', () => {
    test('Verify Note box is displayed in the Recordings section');
    test('Verify Note box contains the bold Note label');
    test('Verify Note text states the setting will be reflected by default for meetings you host');
    test('Verify Note text states you can still change your preference while starting the meeting');
    test('Verify lightbulb icon is displayed alongside the note');
  });

  // ─── Persistence ─────────────────────────────────────────────────────────────

  describe('Persistence', () => {
    test('Verify toggle state persists after closing and reopening the Settings panel');
    test('Verify Meeting Recording radio selection persists after closing and reopening the Settings panel');
  });

  // ─── Accessibility ────────────────────────────────────────────────────────────

  describe('Accessibility', () => {
    test('Verify all toggle switches have accessible ARIA roles');
    test('Verify all toggle switches are keyboard focusable');
    test('Verify pressing Space on a focused toggle changes its state');
    test('Verify all radio buttons are keyboard focusable');
    test('Verify close button is reachable via keyboard Tab navigation');
    test('Verify Personal Configurations panel has no critical ARIA accessibility violations');
  });

  // ─── Visual / Layout ─────────────────────────────────────────────────────────

  describe('Visual / Layout', () => {
    test('Verify exactly 6 toggle switches are displayed on the panel');
    test('Verify exactly 3 radio buttons are displayed in the Recordings section');
    test('Verify Personal Configurations title appears in both the sidebar and the panel header');
  });

});
