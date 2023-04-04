import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { card } from "@/assets/images/card.png";
export const Twiter = () => {
  return (
    <Card>
      <CardHeader>
        <Flex align="center" justify="space-between>">
          <HStack>
            <Image src={card} />
          </HStack>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>Hello world</Text>
      </CardBody>
    </Card>
  );
};
