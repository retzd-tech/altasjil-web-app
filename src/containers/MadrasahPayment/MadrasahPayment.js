import React, { Component } from "react";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { Fade } from "react-reveal";
import { Comment, Button, Divider, List, Typography } from "antd";

import "./MadrasahPayment.css";
import madrasah from "../../data/madrasah.json";

class MadrasahPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMadrasahItem = () => {};

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    const data = [
      "Login ke Mobile / Internet Banking anda yang tergabung pada jaringan ATM Bersama, Prima atau Link",
      "Pilih menu transfer",
      "Pilih Bank BCA / Masukkan kode bank 014 sebagai kode bank",
      "Masukkan 12345678 sebagai rekening tujuan.",
      "Masukkan jumlah uang pembayaran sebesar 50.000",
      "Lakukan screenshot atau foto bukti pembayaran anda",
      "Setelah bukti transaksi sudah ada, silahkan melanjutkan ke langkah berikutnya untuk mengirimkan bukti transfer ke admin via Whatsapp",
    ];

    return (
      <div>
        <Fade>
          <Container>
            <Box my={3}>
              <Divider orientation="left">Tata cara pembayaran</Divider>
              <List
              orientation="left"
                size="small"
                header={<div>Transfer Bank</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item><div align="left"><ul><li>{item}</li></ul></div></List.Item>}
              />
              <Button type="primary" className="button" onClick={() => {
                window.location.href = `https://wa.me/081515977567?text=Halo, Saya ${this.props.user.displayName} dengan email ${this.props.user.email} ingin melakukan konfirmasi transaksi, berikut bukti transaksi saya ya`;
              }}>Kirim bukti transaksi</Button>
            </Box>
          </Container>
        </Fade>
      </div>
    );
  }
}

export default MadrasahPayment;
