const JSMidi = require('./JSMidi');

/**
 * JSMidiProject defines a project/song that is used to interface with
 * JSMidi. It also initializes WebMidi passed from the JSMidi Atom Plugin
 * and the Atom browser.
 *
 * @param {Object} midi - Web MIDI API instance
 * @param {Object} time - window's performance time
*/
module.exports = class JSMidiProject {
  constructor (midi, time) {
    JSMidi.setup(midi, time);
    this.jsmidi = JSMidi;
    this.setup();
  }

  /**
   * This is where the user sets up their project. Define the
   * loop, instruments, tempo, etc.
  */
  setup () {
    console.log('JSMidi: setup your project here...');
  }
};
