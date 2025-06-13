"use strict";

import pretty from "../examples/pretty-logger.js";
import { WebSocketServer } from "ws";

import NFC from "./NFC";
import Reader, {
	TAG_ISO_14443_3,
	TAG_ISO_14443_4,
	KEY_TYPE_A,
	KEY_TYPE_B,
	CONNECT_MODE_CARD,
	CONNECT_MODE_DIRECT,
} from "./Reader";
import ACR122Reader from "./ACR122Reader";
import {
	UNKNOWN_ERROR,
	FAILURE,
	CARD_NOT_CONNECTED,
	OPERATION_FAILED,
	BaseError,
	TransmitError,
	ControlError,
	ReadError,
	WriteError,
	LoadAuthenticationKeyError,
	AuthenticationError,
	ConnectError,
	DisconnectError,
	GetUIDError,
} from "./errors";

export {
	NFC,
	Reader,
	TAG_ISO_14443_3,
	TAG_ISO_14443_4,
	KEY_TYPE_A,
	KEY_TYPE_B,
	CONNECT_MODE_CARD,
	CONNECT_MODE_DIRECT,
	ACR122Reader,
	UNKNOWN_ERROR,
	FAILURE,
	CARD_NOT_CONNECTED,
	OPERATION_FAILED,
	BaseError,
	TransmitError,
	ControlError,
	ReadError,
	WriteError,
	LoadAuthenticationKeyError,
	AuthenticationError,
	ConnectError,
	DisconnectError,
	GetUIDError,
};

/* 1. Levantamos el servidor WebSocket */
const wss = new WebSocketServer({ port: 8085 });
global.wss = wss;
wss.on("connection", (ws) => {
	pretty.info("💡 cliente WebSocket conectado");
});

const START_PAGE = 4; // primera página/bloque de usuario
const PAGES = 8; // cuántas páginas leer/escribir (8×4 B = 32 B)
const BLOCK_SIZE = 4; // 4 para Ultralight/NTAG, 16 para Classic

/* 2. Función auxiliar para enviar a todos los clientes */
function broadcast(data) {
	const payload = JSON.stringify(data);
	for (const client of wss.clients) {
		if (client.readyState === client.OPEN) client.send(payload);
	}
}

/* 3. NFC */
const nfc = new NFC(pretty);

nfc.on("reader", (reader) => {
	pretty.info("👉 reader conectado", reader.name);

	reader.on("card", async (card) => {
		try {
			const bytesToRead = PAGES * BLOCK_SIZE;
			const data = await reader.read(START_PAGE, bytesToRead, BLOCK_SIZE);

			const text = data.toString("utf8").replace(/\0/g, "");
			pretty.info(`📲 leído: "${text}"`);

			broadcast({ event: "nfcData", text });
		} catch (err) {
			pretty.error("error al leer", err);
		}
	});
});
