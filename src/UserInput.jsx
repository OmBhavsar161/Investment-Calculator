
export default function UserInput({ onChangeProp, userInput}) {
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(event) => onChangeProp('initialInvestment', event.target.value)}/>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChangeProp('annualInvestment', event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(event) => onChangeProp('expectedReturn', event.target.value)}/>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" required value={userInput.duration} onChange={(event) => onChangeProp('duration', event.target.value)}/>
        </p>
      </div>
    </section>
  );
}
