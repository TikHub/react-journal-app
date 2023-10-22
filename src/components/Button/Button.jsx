import "./Button.css";

export default function Button({ accent, name }) {
	return <button className={`button ${accent ? "accent" : ""}`}>{name}</button>;
}