import React from "react";
import { observer } from "mobx-react";
import cx from 'classnames';

// Componet for render column data
const Column = observer(({ direction = "column", children, jc = "flex-start", ai = "flex-start", className }) => {
    return (
        <div className={cx("column", `column__${direction}`, `column__jc_${jc}`, `column__ai_${ai}`, className)}>
            {children}
        </div>
    )
});

export { Column };
