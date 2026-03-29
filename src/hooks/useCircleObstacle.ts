/**
 * Given a line's vertical position and a circular obstacle,
 * returns the available width and x-offset for text on that line.
 *
 * Text flows on both sides of the circle. For each line, we check
 * if it intersects the circle and return segments of available space.
 */
export interface CircleObstacle {
  cx: number;
  cy: number;
  radius: number;
}

export interface LineSlot {
  maxWidth: number;
  xOffset: number;
}

/**
 * For a given line y range, calculate the widest contiguous slot
 * available for text (either left or right of the circle, or full width).
 */
export function getLineSlot(
  lineTop: number,
  lineHeight: number,
  canvasWidth: number,
  circle: CircleObstacle,
  padding: number = 16
): LineSlot {
  const lineMid = lineTop + lineHeight / 2;
  const dy = lineMid - circle.cy;

  // Line doesn't intersect circle — full width available
  if (Math.abs(dy) >= circle.radius) {
    return { maxWidth: canvasWidth, xOffset: 0 };
  }

  // Compute chord half-width at this y
  const halfChord = Math.sqrt(circle.radius * circle.radius - dy * dy);
  const circleLeft = circle.cx - halfChord - padding;
  const circleRight = circle.cx + halfChord + padding;

  // Available space on left and right of circle
  const leftWidth = Math.max(0, circleLeft);
  const rightWidth = Math.max(0, canvasWidth - circleRight);

  // Return the wider side
  if (leftWidth >= rightWidth) {
    return { maxWidth: leftWidth, xOffset: 0 };
  } else {
    return { maxWidth: rightWidth, xOffset: circleRight };
  }
}
