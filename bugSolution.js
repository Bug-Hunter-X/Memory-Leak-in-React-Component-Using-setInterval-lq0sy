```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts or the effect changes
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```