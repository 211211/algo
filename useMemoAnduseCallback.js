import React, { useCallback, useMemo, useState } from "react";

const neverChange = "I never change";
const oneSecond = 1000;

export default function App() {
    const [second, setSecond] = useState(0);

    // This 👇 expensive function executes everytime when render happens:
    const calcCallback = useCallback(
        () => expensiveCalc("useCallback"),
        [neverChange]
    );
    const computedCallback = calcCallback();

    // This 👇 executes once
    const computedMemo = useMemo(() => expensiveCalc("useMemo"), [neverChange]);

    setTimeout(() => setSecond(second + 1), oneSecond);

    return `
    useCallback: ${computedCallback} times |
    useMemo: ${computedMemo} |
    App lifetime: ${second}sec.
  `;
}

const tenThousand = 10;
let expensiveCalcExecutedTimes = { useCallback: 0, useMemo: 0 };

function expensiveCalc(hook) {
    let i = 0;
    while (i < tenThousand) i++;

    return ++expensiveCalcExecutedTimes[hook];
}
