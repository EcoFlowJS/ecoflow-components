import { Button, FlexboxGrid, Stack, Text } from "rsuite";
import Image404 from "./image.png";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

interface Error404Props {
  onClick?: MouseEventHandler<HTMLElement>;
  showBackButton?: boolean;
}

export function Error404({
  showBackButton = false,
  onClick = () => {},
}: Error404Props) {
  const [isFixed, setFixed] = useState(false);
  const elementRef = useRef(document.body);

  useEffect(() => {
    if (!elementRef.current) return;
    const resizeObserver = new ResizeObserver(() =>
      setFixed(document.body.clientWidth <= 960 ? true : false)
    );
    resizeObserver.observe(elementRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

  return (
    <FlexboxGrid
      style={{ width: "100vw", height: "100vh", minWidth: 960 }}
      justify="space-around"
      align="middle"
    >
      <FlexboxGrid.Item colspan={8} style={{ minWidth: 480 }}>
        <Stack direction="column" spacing={30}>
          <Stack.Item>
            <Text
              align="center"
              weight="bold"
              size="5vh"
              as="pre"
              transform="uppercase"
            >{`Page 404
Not Found
            `}</Text>
          </Stack.Item>
          <Stack.Item>
            <Text size="3vh" as="pre" align="center">
              {`Sorry, The page you are looking for was
moved, removed, renamed or might
never existed
                `}
            </Text>
          </Stack.Item>
          {showBackButton ? (
            <Stack.Item>
              <Button
                appearance="primary"
                onClick={onClick}
                size="lg"
                style={{ minWidth: isFixed ? 144 : "15vw" }}
              >
                <Text size="2vh" weight="semibold">
                  Go Back
                </Text>
              </Button>
            </Stack.Item>
          ) : (
            <></>
          )}
        </Stack>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={8} style={{ minWidth: 480 }}>
        <img src={Image404} style={{ width: "100%", height: "100%" }} />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
