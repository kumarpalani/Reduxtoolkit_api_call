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
    const valuechange = [];
    inputs.forEach((input) => {
      if (input.checked) {
        if (selectedFilters.includes(input.value)) return true;
        valuechange.push(input.value);
      } else {
        if (selectedFilters.includes(input.value)) {
          setSelectedFilers(selectedFilters.filter((x) => x !== input.value));
        }
      }
    });

    setSelectedFilers((prev) => [...prev, ...valuechange]);
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

        <input type="submit" value="Submit" />
      </form>

      <Columnrender items={users} userKey={selectedFilters} />
    </>
  );
};

export default Rowrender;
