import { useDummyContext } from "../../providers/DummyProvider";

export default function ThemeMode() {
  const { mode, setMode } = useDummyContext();
  return (
    <div>
      <h1>{mode} mode</h1>
      <button
        onClick={() => setMode((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        change mode
      </button>
    </div>
  );
}
