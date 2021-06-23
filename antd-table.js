###########################################################################################################################################################################
###################################################################     codewithammir   ########################################################################################################
import "./App.css";
import { Table } from "antd";
import "antd/dist/antd.css";
/* import { Navbar } from "./Components/Header/Navbar";
import bg from "../src/assests/bg.jpg";
import { Contentjs } from "./Components/Content/Content";
const { Content } = Layout; */

function App() {
  const data = [
    {
      name: "xxx",
      age: 20,
      addr: "addr2",
      key: "1",
    },
    {
      name: "yyy",
      age: 18,
      addr: "addr1",
      key: "2",
    },
    {
      name: "zzz",
      age: 23,
      addr: "addr3",
      key: "3",
    },
  ];
  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "addr",
      key: "key",
    },
    {
      title: "Graduate",
      key: "key",
      render: (payload) => {  //payload la use pani list[data{}] la iruka data va access panalam
        return <p>{payload.age > 20 ? "TRUE" : "FALSE"}</p>;
      },
    },
  ];
  return (
    <div className="table">
      <Table dataSource={data} columns={column}></Table>
    </div>
  );
  /* <Layout>
      <Navbar />
      <Layout>
        <Content>
          <Contentjs />
        </Content>
      </Layout>
    </Layout> */
}

export default App;
