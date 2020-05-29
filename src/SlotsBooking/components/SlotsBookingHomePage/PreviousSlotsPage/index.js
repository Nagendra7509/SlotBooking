import React from "react";

import { observer } from "mobx-react";

@observer
class PreviousSlots extends React.Component {


    render() {
        const { previousSlots } = this.props;
        console.log(previousSlots);

        return <h1 className="text-center">PreviousSlots</h1>;
    }
}

export default PreviousSlots;
