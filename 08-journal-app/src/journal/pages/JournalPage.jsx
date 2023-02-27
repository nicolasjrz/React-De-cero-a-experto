import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../view/NoteView";
import { NothingSelectedView } from "../view/NothingSelectedView";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/** <NothingSelectedView />*/}
      {/** nothinSeleted*/}
      <NoteView />
    </JournalLayout>
  );
};
