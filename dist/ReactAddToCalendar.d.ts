import * as React from "react";

export interface AddToCalendarEvent {
    title?: string;
    description?: string;
    location?: string;
    startTime?: string | Date;
    endTime?: string | Date;
}

export interface AddToCalendarProps {
    buttonClassClosed?: string;
    buttonClassOpen?: string;
    buttonLabel?: string;
    buttonTemplate?: any;
    buttonIconClass?: string;
    useFontAwesomeIcons?: boolean;
    buttonWrapperClass?: string;
    displayItemIcons?: boolean;
    optionsOpen?: boolean;
    dropdownClass?: string;
    event: AddToCalendarEvent;
    listItems?: any[];
    clubreadyId?: string;
    afterItemClick?: (clubreadyId: string) => void;
    rootClass?: string;
}

declare const ReactAddToCalendar: React.ComponentClass<AddToCalendarProps>;

export default ReactAddToCalendar;