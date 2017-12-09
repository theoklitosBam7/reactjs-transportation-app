function TableHeader(props) {
  return <th>{props.item}</th>;
}

function TableData(props) {
  return <td>{props.item}</td>;
}

function TableCreation(props) {
  return (
    <div>
      <ul>
        <table>
          <tr>
            <TableHeader item={props.labels[0]} />
            <TableHeader item={props.labels[1]} />
            <TableHeader item={props.labels[2]} />
            <TableHeader item={props.labels[3]} />
          </tr>
          <tr>
            <TableData item={props.data[0]} />
            <TableData item={props.data[1]} />
            <TableData item={props.data[2]} />
            <TableData item={props.data[3]} />
          </tr>
        </table>
      </ul>
    </div>
  );
}

function TypeHeader(props) {
  return <h2>{props.header}</h2>;
}

function TransportTitle(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.descr}</p>
    </div>
  );
}

function SelectType(props) {
  return <option value={props.item}>{props.item}</option>;
}

function ChooseOptions(props) {
  return (
    <div>
      <h2>{props.header}</h2>
      New Only &nbsp;
      <input type="checkbox" id="coding" name="interest" value="coding" />
      <p />
      Select Type &nbsp;
      <select>
        <SelectType item={props.items[0]} />
        <SelectType item={props.items[1]} />
        <SelectType item={props.items[2]} />
        <SelectType item={props.items[3]} />
      </select>
    </div>
  );
}

function TransportApp(props) {
  return (
    <div>
      <TransportTitle
        title="Welcome to React Transportation"
        descr="The best place to buy vehicles online"
      />
      <ChooseOptions
        header="Choose Options"
        items={["All", "Cars", "Trucks", "Convertibles"]}
      />
      <TypeHeader header="Cars" />
      <TableCreation
        labels={["Year", "Model", "Price", "Buy"]}
        data={["2013", "A", "$32000", <button type="button">Buy Now</button>]}
      />
      <TableCreation
        labels={["Year", "Model", "Price", "Buy"]}
        data={["2011", "B", "$4400", <button type="button">Buy Now</button>]}
      />
      <TableCreation
        labels={["Year", "Model", "Price", "Buy"]}
        data={["2016", "B", "$15500", <button type="button">Buy Now</button>]}
      />
      <TypeHeader header="Trucks" />
      <TableCreation
        labels={["Year", "Model", "Price", "Buy"]}
        data={["2014", "D", "$18000", <button type="button">Buy Now</button>]}
      />
      <TableCreation
        labels={["Year", "Model", "Price", "Buy"]}
        data={["2013", "E", "$5200", <button type="button">Buy Now</button>]}
      />
      <TypeHeader header="Convertibles" />
      <TableCreation
        labels={["Year", "Model", "Price", "Buy"]}
        data={["2009", "F", "$2000", <button type="button">Buy Now</button>]}
      />
      <TableCreation
        labels={["Year", "Model", "Price", "Buy"]}
        data={["2010", "G", "$6000", <button type="button">Buy Now</button>]}
      />
      <TableCreation
        labels={["Year", "Model", "Price", "Buy"]}
        data={["2012", "H", "$12500", <button type="button">Buy Now</button>]}
      />
      <TableCreation
        labels={["Year", "Model", "Price", "Buy"]}
        data={["2017", "M", "$50000", <button type="button">Buy Now</button>]}
      />
    </div>
  );
}

ReactDOM.render(<TransportApp />, document.getElementById("root"));
