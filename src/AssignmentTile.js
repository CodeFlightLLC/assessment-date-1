import React from "react";

import "./AssignmentTile.scss";

export default ({
  unlockAt,
  lockAt,
  timeLimit,
  isLocked,
  onToggleLocked,
  onBeginEdit
}) => (
  <div className="assignmentTile">
    <div className={`header ${isLocked ? "locked" : "unlocked"}`}>
      <span className="headerText">{isLocked ? "Locked" : "Unlocked"}</span>
    </div>
    <div className="content" />
  </div>
);
