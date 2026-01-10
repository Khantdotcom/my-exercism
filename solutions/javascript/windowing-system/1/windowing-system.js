// @ts-check

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size(80, 60);
    this.position = new Position(0, 0);
  }

  resize(newSize) {
    // Limits: width/height must be at least 1, and cannot exceed screen bounds
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    // Limits: x/y must be at least 0, and cannot push window off screen
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(newX, newY);
  }
}

/**
 * Changes a ProgramWindow instance to specific dimensions and position
 * This must be an exported function, not a class method.
 */
export function changeWindow(programWindow) {
  programWindow.size.resize(400, 300);
  programWindow.position.move(100, 150);
  return programWindow;
}