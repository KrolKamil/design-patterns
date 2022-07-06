interface EntertaimentDevice {
  channelUp(): void;

  channelDown(): void;

  getChannel(): number;
}

class Tv implements EntertaimentDevice {
  channel: number;

  constructor() {
    this.channel = 0;
  }

  channelUp(): void {
    this.channel++;
  }

  channelDown(): void {
    this.channel--;
  }

  getChannel(): number {
    return this.channel;
  }
}

class Tablet implements EntertaimentDevice {
  channel: number;

  constructor() {
    this.channel = 0;
  }

  channelUp(): void {
    this.channel = this.channel + 1;
  }

  channelDown(): void {
    this.channel = this.channel - 1;
  }

  getChannel(): number {
    return this.channel;
  }
}

abstract class Controller {
  protected entertaimentDevice: EntertaimentDevice;

  constructor(entertaimentDevice: EntertaimentDevice) {
    this.entertaimentDevice = entertaimentDevice;
  }

  buttonUp() {
    this.entertaimentDevice.channelUp();
  }

  buttonDown() {
    this.entertaimentDevice.channelDown();
  }

  abstract getState(): number;
}

class TvController extends Controller {
  getState() {
    return this.entertaimentDevice.getChannel();
  }
}
