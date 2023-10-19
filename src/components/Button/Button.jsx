import "./Button.css";

// eslint-disable-next-line react/prop-types
export default function Button({ accent, name }) {
    return <button className={`button ${accent ? "accent" : ""}`}>{name}</button>;
}