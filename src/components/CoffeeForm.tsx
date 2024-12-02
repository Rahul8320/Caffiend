import { useState } from "react";
import { coffeeOptions } from "../utils";

function CoffeeForm() {
  const [selectedCoffee, setSelectedCoffee] = useState<string | null>(null);
  const [showCoffeeType, setShowCoffeeType] = useState(false);

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-pencil" />
        <h2>Start Tracking Today</h2>
      </div>
      <h4>Select coffee type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
          return (
            <button
              className={
                "button-card" +
                (selectedCoffee === option.name ? "coffee-button-selected" : "")
              }
              key={optionIndex}
              onClick={() => {
                setSelectedCoffee(option.name);
                setShowCoffeeType(false);
              }}
            >
              <h4>{option.name}</h4>
              <p>{option.caffeine} mg</p>
            </button>
          );
        })}
        <button
          className={
            "button-card" + (showCoffeeType ? "coffee-button-selected" : "")
          }
          onClick={() => {
            setShowCoffeeType(true);
            setSelectedCoffee(null);
          }}
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>
      {showCoffeeType && (
        <select
          onChange={(e) => setSelectedCoffee(e.target.value)}
          name="coffee-list"
          id="coffee-list"
        >
          <option value={undefined} selected disabled>
            Select type
          </option>
          {coffeeOptions.map((option, optionIndex) => {
            return (
              <option key={optionIndex} value={option.name}>
                {option.name} ({option.caffeine}mg)
              </option>
            );
          })}
        </select>
      )}
      <h4>Add the cost ($)</h4>
      <input className="w-full" type="number" placeholder="4.50" min={0.5} />
      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select id="hours-select">
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24,
            ].map((hour, hourIndex) => {
              return (
                <option key={hourIndex} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h6>Mins</h6>
          <select id="hours-select">
            {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(
              (min, minIndex) => {
                return (
                  <option key={minIndex} value={min}>
                    {min}
                  </option>
                );
              }
            )}
          </select>
        </div>
      </div>
      <button>
        <p>Add Entry</p>
      </button>
    </>
  );
}

export default CoffeeForm;
