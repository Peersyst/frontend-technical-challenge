
import { ReactNode } from "react";
import Col from "../Col/Col";
import { OlStyled, ListItem } from "./OrderedList.styles";

interface OrderedListProps {
    headers?: string[];
    children: ReactNode;
  }

const OrderedList = ({ headers, children }: OrderedListProps) => {
    return (
        <OlStyled>
            {headers && (
                <ListItem>
                    {headers.map((header) => (
                        <Col key={header}>{header}</Col>
                    ))}
                </ListItem>
            )}
            {children}
        </OlStyled>
      );
}
export default OrderedList;