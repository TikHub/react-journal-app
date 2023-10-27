import "./Button.css";

export default function Button({ accent, name, onClick }) {
	return <button className={`button ${accent ? "accent" : ""}`} onClick={onClick}>{name}</button>;
}