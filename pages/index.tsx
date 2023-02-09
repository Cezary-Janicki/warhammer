/** @jsxImportSource @emotion/react */

import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Formik, Field, Form } from "formik";
import { css } from "@emotion/react";
import React from "react";
import getRandomRolls from "../libraries/getRandomRolls";
import filterRollResults from "../libraries/filterRollResults";
import woundRollValue from "../libraries/woundRollValue";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Mafs, Coordinates, Point, Polygon } from "mafs";
import "mafs/core.css";
export default function index() {
  const [attacker, setAttacker] = useState({
    BSWS: "",
    Strength: "",
    AP: "",
    Attacks: "",
    Attackers: "",
  });
  const [defender, setDefender] = useState({
    Toughness: "",
    Save: "",
    Wounds: "",
    Defenders: "",
  });
  return (
    <>
      <button onClick={() => console.log("roll result", getRandomRolls(10000))}>
        get random rolls
      </button>
      <p>
        {" "}
        Strength is :{attacker.Strength} Toughness is:{defender.Toughness} wound
        roll result is: {woundRollValue(attacker.Strength, defender.Toughness)}
      </p>
      <p>Attacker Data</p>
      <ul>
        <li>BS/WS: {attacker.BSWS}</li>
        <li>Weapon strength: {attacker.Strength}</li>
        <li>Number of attacks per attacker: {attacker.Attacks}</li>
        <li>Number of attackers: {attacker.Attackers}</li>
      </ul>
      <p>Defender Data</p>
      <ul>
        <li>Toughness: {defender.Toughness}</li>
        <li>Save: {defender.Save}</li>
        <li>Wounds: {defender.Wounds}</li>
        <li>Number of Defenders: {defender.Defenders}</li>
      </ul>
      <div>
        <p> Attacker stats</p>
        <Formik
          initialValues={{
            BSWS: "",
            Strength: "",
            AP: "",
            Attacks: "",
            Attackers: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            // alert(JSON.stringify(values, null, 2));
            setAttacker(values);
          }}
        >
          <Form>
            <Grid container columns={20}>
              <Grid xs={3}>
                <label htmlFor="BSWS">
                  <p>Weapon or ballistic skill</p>
                </label>
                <Field id="BSWS" name="BSWS" placeholder="2" type="number" />
              </Grid>

              <Grid xs={3}>
                <Item>
                  <label htmlFor="Strength">
                    <p>Weapon Strength</p>
                  </label>
                  <Field
                    id="Strength"
                    name="Strength"
                    placeholder="4"
                    type="number"
                  />
                </Item>
              </Grid>

              <Grid xs={3}>
                <label htmlFor="AP">
                  <p>Armour piercing</p>
                </label>
                <Field id="AP" name="AP" placeholder="1" type="number" />
              </Grid>

              <Grid xs={3}>
                <label htmlFor="Attacks">
                  <p>Number of Attacks</p>
                </label>
                <Field
                  id="Attacks"
                  name="Attacks"
                  placeholder="4"
                  type="number"
                />
              </Grid>

              <Grid xs={3}>
                <label htmlFor="Attackers">
                  <p>Number of Attackers</p>
                </label>
                <Field
                  id="Attackers"
                  name="Attackers"
                  placeholder="5"
                  type="number"
                />
              </Grid>
              <button type="submit">Submit</button>
            </Grid>
          </Form>
        </Formik>
      </div>
      <p>Defender stats</p>
      <Formik
        initialValues={{
          Toughness: "",
          Save: "",
          Wounds: "",
          Defenders: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
          setDefender(values);
        }}
      >
        <Form>
          <Grid container columns={20}>
            <Grid xs={3}>
              <label htmlFor="Toughness">
                <p>Toughness</p>
              </label>
              <Field
                id="Toughness"
                name="Toughness"
                placeholder="4"
                type="number"
              />
            </Grid>

            <Grid xs={3}>
              <label htmlFor="Save">
                <p>Model Save</p>
              </label>
              <Field id="Save" name="Save" placeholder="3" type="number" />
            </Grid>

            <Grid xs={3}>
              <label htmlFor="Wounds">
                <p>Wounds per model</p>
              </label>
              <Field id="Wounds" name="Wounds" placeholder="2" type="number" />
            </Grid>

            <Grid xs={3}>
              <label htmlFor="Defenders">
                <p>Number of models</p>
              </label>
              <Field
                id="Defenders"
                name="Defenders"
                placeholder="5"
                type="number"
              />
            </Grid>
            <button type="submit">Submit</button>
          </Grid>
        </Form>
      </Formik>
      <p></p>
      <Mafs>
        <Coordinates.Cartesian />
        <Polygon
          points={[
            [1, 0],
            [1, 2],
            [0, 2],
            [0, 0],
          ]}
        />
      </Mafs>
    </>
  );
}
