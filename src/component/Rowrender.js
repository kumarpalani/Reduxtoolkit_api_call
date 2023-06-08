import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Columnrender from "./Columnrender";

const Rowrender = ({ users }) => {
  const [rowKey, setRowkey] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilters, setSelectedFilers] = useState([]);

  const handleChange = (event, position, checkTxt) => {
    const { checked } = event.target;

    // if (checked) {
    //   console.log(typeof(checkTxt));
    //   setSelectedFilers((prev) => [...prev, checkTxt]);
    // } else {
    //   setSelectedFilers(selectedFilters.filter((x) => x !== checkTxt));
    // }
  };

  //New code for filter key
  const handleSubmit = (event) => {
    event.preventDefault();

    const inputs = Array.from(event.target);

    let selectedFiltersArr = [...selectedFilters];

    inputs.map((item) => {
      if (item.checked) {
        if (selectedFiltersArr.includes(item.value)) return true;

        selectedFiltersArr.push(item.value);
      } else {
        if (selectedFiltersArr.includes(item.value)) {
          selectedFiltersArr = selectedFiltersArr.filter(
            (n) => n !== item.value
          );
        }
      }
    });

    setSelectedFilers(selectedFiltersArr);
  };

  ////onclick on key row

  // const getKey = (e) => {
  //   const rowKeyval = e.target.getAttribute("data-item");
  //   if (rowKey.includes(rowKeyval)) {
  //     return true;
  //   }
  //   setRowkey([...rowKey, rowKeyval]);
  // };

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {users.map((items, index) => {
              return (
                index === 0 &&
                Object.keys(items).map((key, j) => {
                  return (
                    <tr key={index + key}>
                      <td>
                        <Form.Check
                          defaultChecked={false}
                          onChange={(event) => {
                            handleChange(event, j, key);
                          }}
                          aria-label="option 1"
                          value={key}
                        />{" "}
                      </td>
                      <td
                        // style={{ cursor: "pointer" }}
                        data-item={key}
                        // onClick={(e) => getKey(e)}
                        key={key + items.id}
                      >
                        {key}
                      </td>
                    </tr>
                  );
                })
              );
            })}
          </tbody>
        </Table>

        <input type="submit" value="Apply" />
      </form>

      <Columnrender items={users} userKey={selectedFilters} />
    </>
  );
};

export default Rowrender;
