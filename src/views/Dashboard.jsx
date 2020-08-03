/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataPieRetail,
  legendPieRetail,
  dataPieWeb,
  legendPieWeb,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar,
  dataRTL,
  optionsRTL,
  responsiveRTL,
  legendRTL,
  dataWeb,
  optionsWeb,
  responsiveWeb,
  legendWeb

} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Proyectos"
                statsValue="4"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Activos"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Desempeño"
                statsValue="2%"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="Ultimos 2 dias"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Eficiencia"
                statsValue="115%"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Ultimos 2 dias"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Eficiencia Promedio"
                statsValue="219%"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Durante el proyecto"
              />
            </Col>
            {/* <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="0"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col> */}
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Demo ReX - Reaseguro"
                category="Desempeño de las ultimas 36 Horas"
                stats="Actulizado hace 30 minutos"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
             <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Horas Invertidas"
                category="Horas invertidas"
                stats="Julio 2020"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col> 
          </Row>

          <Row>
          <Col md={8}>
              <Card
                id="chartRetail"
                title="Sistema Retail"
                category="Desempeño de las ultimas 36 Horas"
                stats="Actualizado hace 30 minutos"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataRTL}
                      type="Line"
                      options={optionsRTL}
                      responsiveOptions={responsiveRTL}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendRTL)}</div>
                }
              />
            </Col>

            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Horas Invertidas"
                category="Horas invertidas"
                stats="Julio 2020"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPieRetail} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPieRetail)}</div>
                }
              />
            </Col> 

            {/* <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col> */}
          </Row>
          <Row>
          <Col md={8}>
              <Card
                id="chartActivity"
                title="App Retail"
                category="Desempeño de las ultimas 36 Horas"
                stats="Actualizado hace 30 minutos"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Line"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
          <Col md={8}>
              <Card
                id="chartWebDev"
                title="THB Online"
                category="Desempeño de las ultimas 36 Horas"
                stats="Actualizado hace 30 minutos"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataWeb}
                      type="Line"
                      options={optionsWeb}
                      responsiveOptions={responsiveWeb}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendWeb)}</div>
                }
              />
            </Col>

            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Horas Invertidas"
                category="Horas invertidas"
                stats="Julio 2020"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPieWeb} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPieWeb)}</div>
                }
              />
            </Col> 


          </Row>
          

        </Grid>
      </div>
    );
  }
}

export default Dashboard;
