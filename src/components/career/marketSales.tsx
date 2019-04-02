import * as React from "react"
import Card from "./marketCard"
export interface MarketSalesProps {}

export interface MarketSalesState {}
const  cards = [
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
]



class MarketSales extends React.Component<MarketSalesProps, MarketSalesState> {
  state = {
   
  }
  render() {
   
    return (
      <section className="market-sales">
        <h3>Market Sales</h3>
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
