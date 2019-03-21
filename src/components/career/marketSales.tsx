import * as React from "react"
import Card from "./marketCard"
export interface MarketSalesProps {}

export interface MarketSalesState {}

class MarketSales extends React.Component<MarketSalesProps, MarketSalesState> {
  state = {
    cards: [
      {
        name: "development",
        location: "Armenia",
        time: "full time",
      },
      {
        name: "development",
        location: "Armenia",
        time: "full time",
      },
      {
        name: "development",
        location: "Armenia",
        time: "full time",
      },
      {
        name: "development",
        location: "Armenia",
        time: "full time",
      },
    ],
  }
  render() {
    const { cards } = this.state
    return (
      <section className="market-sales">
        <h2>Market Sales</h2>
        <div className="container flex-between card-main">
          {cards.map((item, i) => (
            <Card key={i} details={item} />
          ))}
        </div>
      </section>
    )
  }
}

export default MarketSales
