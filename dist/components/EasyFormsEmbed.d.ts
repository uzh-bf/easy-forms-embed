import { FC } from 'react';
interface PrefillInfo {
    /**
     * Any info you want to have prefilled as an Object and formated like {text_1: "value", text_2: "value"}
     */
    [key: string]: any;
}
interface Props {
    /**
     * The url of the form
     */
    formUrl: URL;
    /**
     * A key for the container, otherwise only 1 is possible
     */
    key: string;
    /**
     * Any info you want to have prefilled as an Object and formated like {text_1: "value", text_2: "value"}
     */
    prefillInfo?: PrefillInfo;
}
declare const EasyFormsEmbed: FC<Props>;
export default EasyFormsEmbed;
