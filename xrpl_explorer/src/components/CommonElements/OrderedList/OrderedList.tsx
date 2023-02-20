
import { ReactNode } from "react";
import Col from "../Col/Col";
import { OlStyled, ListItem } from "./OrderedList.styles";

interface OrderedListProps {
    headers?: string[];
    children: ReactNode;
  }


/**
 * Component to render an ordered list with the possibility to add headers
 */

const OrderedList = ({ headers, children }: OrderedListProps) => {
    return (
        <OlStyled>
            {headers && (
                <ListItem fontSize="10px" fontWeight="700" color="#a2a2a4">
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