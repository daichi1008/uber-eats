import React from "react";

import { DialogContent, Dialog, DialogTitle } from "@material-ui/core";
import { OrderButton } from "./Buttons/OrderButton";

export const NewOrderConfirmDialog = ({
  isOpen,
  onClose,
  existingResutaurautName, //他店舗の名前
  NewResutaurautName, //いま選択した店舗の名前
  onclickSubmit, //仮注文の置き換えAPIを呼ぶ
}) => (
  <Dialog open={isOpen} onClose={onClose} maxWidth="xs">
    <DialogTitle>新規注文しますか？</DialogTitle>
    <DialogContent>
      <p>
        {`ご注文に${existingResutaurautName}の商品が含まれています。
                    新規の注文を開始して${NewResutaurautName}の商品を追加してください。`}
      </p>
      {/*先ほど作ったorderButtonをここで使用*/}
      <OrderButton onClick={onclickSubmit}>新規注文</OrderButton>
    </DialogContent>
  </Dialog>
);
