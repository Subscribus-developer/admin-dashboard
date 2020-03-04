import React, { useEffect }  from "react";
import GSTC from "../../components/GSTC/GSTC"

function App() {
    const config = {
      height: 1000,
      list: {
        rows: {
          "1": {
            id: "1",
            label: "Row 1"
          },
          "2": {
            id: "2",
            label: "Row 2"
          },
          "3": {
            id: "3",
            label: "Row 3"
          },
          "4": {
            id: "4",
            label: "Row 4"
          },
          "5": {
            id: "5",
            label: "Row 5"
          },
          "6": {
            id: "6",
            label: "Row 6"
          },
          "7": {
            id: "7",
            label: "Row 7"
          },
          "8": {
            id: "8",
            label: "Row 6"
          },
          "9": {
            id: "9",
            label: "Row 9"
          },
        },
        columns: {
          data: {
            id: {
              id: "id",
              data: "id",
              width: 50,
              header: {
                content: "ID"
              }
            },
            label: {
              id: "label",
              data: "label",
              width: 100,
              header: {
                content: "Label"
              }
            }
          }
        }
      },
      chart: {
        items: {
          "1": {
            id: "1",
            rowId: "1",
            label: "Item 1",
            time: {
              start: new Date().getTime(),
              end: new Date().getTime() + 24 * 60 * 60 * 1000
            }
          },
          "2": {
            id: "2",
            rowId: "2",
            label: "Item 2",
            time: {
              start: new Date().getTime() + 4 * 24 * 60 * 60 * 1000,
              end: new Date().getTime() + 5 * 24 * 60 * 60 * 1000
            }
          },
          "3": {
            id: "3",
            rowId: "2",
            label: "Item 3",
            time: {
              start: new Date().getTime() + 6 * 24 * 60 * 60 * 1000,
              end: new Date().getTime() + 7 * 24 * 60 * 60 * 1000
            }
          },
          "4": {
            id: "4",
            rowId: "3",
            label: "Item 4",
            time: {
              start: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
              end: new Date().getTime() + 12 * 24 * 60 * 60 * 1000
            }
          },
          "5": {
            id: "5",
            rowId: "4",
            label: "Item 5",
            time: {
              start: new Date().getTime() + 12 * 24 * 60 * 60 * 1000,
              end: new Date().getTime() + 14 * 24 * 60 * 60 * 1000
            }
          }
        }
      }
    };
  
    let subs = [];
  
    function onState(state) {
      state.update("config.chart.items.1", item1 => {
        item1.label = "Gantt schedule timeline calendar";
        item1.time.end = item1.time.end + 2 * 24 * 60 * 60 * 1000;
        return item1;
      });
      subs.push(
        state.subscribe("config.chart.items", items => {
          console.log("items changed", items);
        })
      );
      subs.push(
        state.subscribe("config.list.rows", rows => {
          console.log("rows changed", rows);
        })
      );
    }
  
    useEffect(() => {
      return () => {
        subs.forEach(unsub => unsub());
      };
    });
  
    return (
      <div className="App">
        <GSTC config={config} onState={onState} />
      </div>
    );
  }

export default App;