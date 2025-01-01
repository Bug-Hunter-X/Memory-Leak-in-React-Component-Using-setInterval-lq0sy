# React setInterval Memory Leak

This example demonstrates a common mistake when using setInterval within a React useEffect hook: forgetting to clear the interval when the component unmounts or when the effect changes. This leads to a memory leak, as the interval continues to run even after the component is no longer needed.

The `bug.js` file contains the faulty component. The `bugSolution.js` file provides the corrected version with cleanup implemented.