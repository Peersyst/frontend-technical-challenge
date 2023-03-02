import styled from "styled-components";
import { Payment } from "xrpl";
import { XRP_FORMATER } from "../../constants";
import { getObjectKeys } from "../../utils/utils";

const TransPaymentCellRow = styled.td`
  background-color: rgba(52, 52, 55, 0.5);
  padding: 32px;
`;
const CellRowContainer = styled.div`
  display: flex;
`;
const CellRowText = styled.div`
  color: #a2a2a4;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
`;
const CellRowValue = styled.div`
  font-weight: 300;
  padding-left: 8px;
  padding-right: 4px;
`;
const CellRowDestination = styled.div`
  color: #32e685;
  font-weight: 300;
`;
interface TransactionPaymentCellI {
  trans: Payment;
}

const TransactionPaymentCell = ({ trans }: TransactionPaymentCellI) => {
  return (
    <tr>
      <TransPaymentCellRow colSpan={getObjectKeys(trans).length + 1}>
        <CellRowContainer>
          <CellRowText>
            {"SEND"}
            <CellRowValue>
              {typeof trans?.Amount === "string"
                ? parseInt(trans?.Amount) * XRP_FORMATER
                : trans?.Amount?.value?.toString()}{" "}
              {"XRP TO"}
            </CellRowValue>
            <CellRowDestination>{trans?.Destination}</CellRowDestination>
          </CellRowText>
        </CellRowContainer>
      </TransPaymentCellRow>
    </tr>
  );
};

export default TransactionPaymentCell;
