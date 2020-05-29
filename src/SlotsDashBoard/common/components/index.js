import React from "react";

import { ColorBox, Text, Color } from "./styledComponent";

export const ColorLabels = (props) => <Color>
                                <ColorBox colorValue={props.colorValue}/>
                                <Text>
                                    {props.children}
                                </Text>
                            </Color>;
