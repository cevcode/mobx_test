import React from "react";
import { observer } from "mobx-react";
import cx from 'classnames';

const Column = observer(({ type, data }) => {
    console.log('data', data);
    return (
    <div className={cx("column", `column__${type}`)}>
        test
    </div>
    )
});

export { Column };
