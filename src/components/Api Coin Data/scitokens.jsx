import React, { useEffect, useState } from "react";

const MainUrl = "https://scimatic.net/tokens/scimatic";
const backUpUrl = "https://scimatic.online/tokens/scimatic";

const GetTokensApi = async (isUrlBreak = false) => {
  var Tokens = [];

  var url =  !isUrlBreak ? MainUrl : backUpUrl 
  console.log("asds",url)

  const tempTokens = await fetch(backUpUrl).then(res => {
    console.log("response: ", res);
    const datas = res.json();

    datas.map((data) => {

    Tokens.push({
      id: data.id,
      userId: data.user_id,
      name: data.name,
      network: data.network,
      symbol: data.symbol,
      icon: data.icon,
      totalSupply: data.total_supply,
      description: data.description,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      address: data.address,
      decimals: data.id == 1 ? 8 : 18,
    });
  
  });
 
  })
  .catch(err => {
    console.log("error:", err);
  });;
  // const datas = await tempTokens.json();
  // await datas.map(async (data) => {

  //   Tokens.push({
  //     id: data.id,
  //     userId: data.user_id,
  //     name: data.name,
  //     network: data.network,
  //     symbol: data.symbol,
  //     icon: data.icon,
  //     totalSupply: data.total_supply,
  //     description: data.description,
  //     createdAt: data.created_at,
  //     updatedAt: data.updated_at,
  //     address: data.address,
  //     decimals: data.id == 1 ? 8 : 18,
  //   });
  
  // });
 
  return Tokens;
};

export default GetTokensApi;