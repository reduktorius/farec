import React from 'react';

function Rank({name, entries}) {
    return (
        <div>
            <div className="f3">
                {`${name}, your entry count is:`}
            </div>
            <div className="f1">
                {entries}
            </div>
        </div>
    )
}

export default Rank;
