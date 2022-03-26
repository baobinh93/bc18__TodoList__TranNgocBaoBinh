import React, { PureComponent } from "react";
import { NoteStyle } from "../JSS";

export default class Note extends PureComponent {
  render() {
    return (
      <NoteStyle>
        *** Ghi chú
        <br />- Ấn Enter hoặc ấn nút + Add để thêm
        <br />- Ấn Enter hoặc Click ra ngoài để hoàn thành Cập Nhật
      </NoteStyle>
    );
  }
}
