/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.models = (function() {

    /**
     * Namespace models.
     * @exports models
     * @namespace
     */
    var models = {};

    models.User = (function() {

        /**
         * Properties of a User.
         * @memberof models
         * @interface IUser
         * @property {number|null} [ID] User ID
         * @property {number|null} [CreatedAt] User CreatedAt
         * @property {number|null} [UpdatedAt] User UpdatedAt
         * @property {string|null} [Name] User Name
         * @property {string|null} [Phone] User Phone
         * @property {models.IAddress|null} [Address] User Address
         * @property {number|null} [AddressID] User AddressID
         * @property {Array.<models.ICreditCard>|null} [CreditCards] User CreditCards
         */

        /**
         * Constructs a new User.
         * @memberof models
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {models.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.CreditCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User ID.
         * @member {number} ID
         * @memberof models.User
         * @instance
         */
        User.prototype.ID = 0;

        /**
         * User CreatedAt.
         * @member {number} CreatedAt
         * @memberof models.User
         * @instance
         */
        User.prototype.CreatedAt = 0;

        /**
         * User UpdatedAt.
         * @member {number} UpdatedAt
         * @memberof models.User
         * @instance
         */
        User.prototype.UpdatedAt = 0;

        /**
         * User Name.
         * @member {string} Name
         * @memberof models.User
         * @instance
         */
        User.prototype.Name = "";

        /**
         * User Phone.
         * @member {string} Phone
         * @memberof models.User
         * @instance
         */
        User.prototype.Phone = "";

        /**
         * User Address.
         * @member {models.IAddress|null|undefined} Address
         * @memberof models.User
         * @instance
         */
        User.prototype.Address = null;

        /**
         * User AddressID.
         * @member {number} AddressID
         * @memberof models.User
         * @instance
         */
        User.prototype.AddressID = 0;

        /**
         * User CreditCards.
         * @member {Array.<models.ICreditCard>} CreditCards
         * @memberof models.User
         * @instance
         */
        User.prototype.CreditCards = $util.emptyArray;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof models.User
         * @static
         * @param {models.IUser=} [properties] Properties to set
         * @returns {models.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link models.User.verify|verify} messages.
         * @function encode
         * @memberof models.User
         * @static
         * @param {models.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.CreatedAt != null && message.hasOwnProperty("CreatedAt"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.CreatedAt);
            if (message.UpdatedAt != null && message.hasOwnProperty("UpdatedAt"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.UpdatedAt);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Name);
            if (message.Phone != null && message.hasOwnProperty("Phone"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Phone);
            if (message.Address != null && message.hasOwnProperty("Address"))
                $root.models.Address.encode(message.Address, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.AddressID != null && message.hasOwnProperty("AddressID"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.AddressID);
            if (message.CreditCards != null && message.CreditCards.length)
                for (var i = 0; i < message.CreditCards.length; ++i)
                    $root.models.CreditCard.encode(message.CreditCards[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link models.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.User
         * @static
         * @param {models.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof models.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.CreatedAt = reader.uint32();
                    break;
                case 3:
                    message.UpdatedAt = reader.uint32();
                    break;
                case 4:
                    message.Name = reader.string();
                    break;
                case 5:
                    message.Phone = reader.string();
                    break;
                case 6:
                    message.Address = $root.models.Address.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.AddressID = reader.uint32();
                    break;
                case 8:
                    if (!(message.CreditCards && message.CreditCards.length))
                        message.CreditCards = [];
                    message.CreditCards.push($root.models.CreditCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof models.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.CreatedAt != null && message.hasOwnProperty("CreatedAt"))
                if (!$util.isInteger(message.CreatedAt))
                    return "CreatedAt: integer expected";
            if (message.UpdatedAt != null && message.hasOwnProperty("UpdatedAt"))
                if (!$util.isInteger(message.UpdatedAt))
                    return "UpdatedAt: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Phone != null && message.hasOwnProperty("Phone"))
                if (!$util.isString(message.Phone))
                    return "Phone: string expected";
            if (message.Address != null && message.hasOwnProperty("Address")) {
                var error = $root.models.Address.verify(message.Address);
                if (error)
                    return "Address." + error;
            }
            if (message.AddressID != null && message.hasOwnProperty("AddressID"))
                if (!$util.isInteger(message.AddressID))
                    return "AddressID: integer expected";
            if (message.CreditCards != null && message.hasOwnProperty("CreditCards")) {
                if (!Array.isArray(message.CreditCards))
                    return "CreditCards: array expected";
                for (var i = 0; i < message.CreditCards.length; ++i) {
                    var error = $root.models.CreditCard.verify(message.CreditCards[i]);
                    if (error)
                        return "CreditCards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.models.User)
                return object;
            var message = new $root.models.User();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.CreatedAt != null)
                message.CreatedAt = object.CreatedAt >>> 0;
            if (object.UpdatedAt != null)
                message.UpdatedAt = object.UpdatedAt >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Phone != null)
                message.Phone = String(object.Phone);
            if (object.Address != null) {
                if (typeof object.Address !== "object")
                    throw TypeError(".models.User.Address: object expected");
                message.Address = $root.models.Address.fromObject(object.Address);
            }
            if (object.AddressID != null)
                message.AddressID = object.AddressID >>> 0;
            if (object.CreditCards) {
                if (!Array.isArray(object.CreditCards))
                    throw TypeError(".models.User.CreditCards: array expected");
                message.CreditCards = [];
                for (var i = 0; i < object.CreditCards.length; ++i) {
                    if (typeof object.CreditCards[i] !== "object")
                        throw TypeError(".models.User.CreditCards: object expected");
                    message.CreditCards[i] = $root.models.CreditCard.fromObject(object.CreditCards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.User
         * @static
         * @param {models.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.CreditCards = [];
            if (options.defaults) {
                object.ID = 0;
                object.CreatedAt = 0;
                object.UpdatedAt = 0;
                object.Name = "";
                object.Phone = "";
                object.Address = null;
                object.AddressID = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.CreatedAt != null && message.hasOwnProperty("CreatedAt"))
                object.CreatedAt = message.CreatedAt;
            if (message.UpdatedAt != null && message.hasOwnProperty("UpdatedAt"))
                object.UpdatedAt = message.UpdatedAt;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Phone != null && message.hasOwnProperty("Phone"))
                object.Phone = message.Phone;
            if (message.Address != null && message.hasOwnProperty("Address"))
                object.Address = $root.models.Address.toObject(message.Address, options);
            if (message.AddressID != null && message.hasOwnProperty("AddressID"))
                object.AddressID = message.AddressID;
            if (message.CreditCards && message.CreditCards.length) {
                object.CreditCards = [];
                for (var j = 0; j < message.CreditCards.length; ++j)
                    object.CreditCards[j] = $root.models.CreditCard.toObject(message.CreditCards[j], options);
            }
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof models.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    models.Address = (function() {

        /**
         * Properties of an Address.
         * @memberof models
         * @interface IAddress
         * @property {number|null} [ID] Address ID
         * @property {number|null} [CreatedAt] Address CreatedAt
         * @property {number|null} [UpdatedAt] Address UpdatedAt
         * @property {string|null} [street] Address street
         * @property {string|null} [city] Address city
         */

        /**
         * Constructs a new Address.
         * @memberof models
         * @classdesc Represents an Address.
         * @implements IAddress
         * @constructor
         * @param {models.IAddress=} [properties] Properties to set
         */
        function Address(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Address ID.
         * @member {number} ID
         * @memberof models.Address
         * @instance
         */
        Address.prototype.ID = 0;

        /**
         * Address CreatedAt.
         * @member {number} CreatedAt
         * @memberof models.Address
         * @instance
         */
        Address.prototype.CreatedAt = 0;

        /**
         * Address UpdatedAt.
         * @member {number} UpdatedAt
         * @memberof models.Address
         * @instance
         */
        Address.prototype.UpdatedAt = 0;

        /**
         * Address street.
         * @member {string} street
         * @memberof models.Address
         * @instance
         */
        Address.prototype.street = "";

        /**
         * Address city.
         * @member {string} city
         * @memberof models.Address
         * @instance
         */
        Address.prototype.city = "";

        /**
         * Creates a new Address instance using the specified properties.
         * @function create
         * @memberof models.Address
         * @static
         * @param {models.IAddress=} [properties] Properties to set
         * @returns {models.Address} Address instance
         */
        Address.create = function create(properties) {
            return new Address(properties);
        };

        /**
         * Encodes the specified Address message. Does not implicitly {@link models.Address.verify|verify} messages.
         * @function encode
         * @memberof models.Address
         * @static
         * @param {models.IAddress} message Address message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Address.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.CreatedAt != null && message.hasOwnProperty("CreatedAt"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.CreatedAt);
            if (message.UpdatedAt != null && message.hasOwnProperty("UpdatedAt"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.UpdatedAt);
            if (message.street != null && message.hasOwnProperty("street"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.street);
            if (message.city != null && message.hasOwnProperty("city"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.city);
            return writer;
        };

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link models.Address.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Address
         * @static
         * @param {models.IAddress} message Address message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Address.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @function decode
         * @memberof models.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Address} Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Address.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Address();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.CreatedAt = reader.uint32();
                    break;
                case 3:
                    message.UpdatedAt = reader.uint32();
                    break;
                case 4:
                    message.street = reader.string();
                    break;
                case 5:
                    message.city = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Address message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Address
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Address} Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Address.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Address message.
         * @function verify
         * @memberof models.Address
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Address.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.CreatedAt != null && message.hasOwnProperty("CreatedAt"))
                if (!$util.isInteger(message.CreatedAt))
                    return "CreatedAt: integer expected";
            if (message.UpdatedAt != null && message.hasOwnProperty("UpdatedAt"))
                if (!$util.isInteger(message.UpdatedAt))
                    return "UpdatedAt: integer expected";
            if (message.street != null && message.hasOwnProperty("street"))
                if (!$util.isString(message.street))
                    return "street: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            return null;
        };

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Address
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Address} Address
         */
        Address.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Address)
                return object;
            var message = new $root.models.Address();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.CreatedAt != null)
                message.CreatedAt = object.CreatedAt >>> 0;
            if (object.UpdatedAt != null)
                message.UpdatedAt = object.UpdatedAt >>> 0;
            if (object.street != null)
                message.street = String(object.street);
            if (object.city != null)
                message.city = String(object.city);
            return message;
        };

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Address
         * @static
         * @param {models.Address} message Address
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Address.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.CreatedAt = 0;
                object.UpdatedAt = 0;
                object.street = "";
                object.city = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.CreatedAt != null && message.hasOwnProperty("CreatedAt"))
                object.CreatedAt = message.CreatedAt;
            if (message.UpdatedAt != null && message.hasOwnProperty("UpdatedAt"))
                object.UpdatedAt = message.UpdatedAt;
            if (message.street != null && message.hasOwnProperty("street"))
                object.street = message.street;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            return object;
        };

        /**
         * Converts this Address to JSON.
         * @function toJSON
         * @memberof models.Address
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Address.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Address;
    })();

    models.CreditCard = (function() {

        /**
         * Properties of a CreditCard.
         * @memberof models
         * @interface ICreditCard
         * @property {number|null} [ID] CreditCard ID
         * @property {number|null} [CreatedAt] CreditCard CreatedAt
         * @property {number|null} [UpdatedAt] CreditCard UpdatedAt
         * @property {number|null} [number] CreditCard number
         * @property {number|null} [UserID] CreditCard UserID
         */

        /**
         * Constructs a new CreditCard.
         * @memberof models
         * @classdesc Represents a CreditCard.
         * @implements ICreditCard
         * @constructor
         * @param {models.ICreditCard=} [properties] Properties to set
         */
        function CreditCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreditCard ID.
         * @member {number} ID
         * @memberof models.CreditCard
         * @instance
         */
        CreditCard.prototype.ID = 0;

        /**
         * CreditCard CreatedAt.
         * @member {number} CreatedAt
         * @memberof models.CreditCard
         * @instance
         */
        CreditCard.prototype.CreatedAt = 0;

        /**
         * CreditCard UpdatedAt.
         * @member {number} UpdatedAt
         * @memberof models.CreditCard
         * @instance
         */
        CreditCard.prototype.UpdatedAt = 0;

        /**
         * CreditCard number.
         * @member {number} number
         * @memberof models.CreditCard
         * @instance
         */
        CreditCard.prototype.number = 0;

        /**
         * CreditCard UserID.
         * @member {number} UserID
         * @memberof models.CreditCard
         * @instance
         */
        CreditCard.prototype.UserID = 0;

        /**
         * Creates a new CreditCard instance using the specified properties.
         * @function create
         * @memberof models.CreditCard
         * @static
         * @param {models.ICreditCard=} [properties] Properties to set
         * @returns {models.CreditCard} CreditCard instance
         */
        CreditCard.create = function create(properties) {
            return new CreditCard(properties);
        };

        /**
         * Encodes the specified CreditCard message. Does not implicitly {@link models.CreditCard.verify|verify} messages.
         * @function encode
         * @memberof models.CreditCard
         * @static
         * @param {models.ICreditCard} message CreditCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreditCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ID);
            if (message.CreatedAt != null && message.hasOwnProperty("CreatedAt"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.CreatedAt);
            if (message.UpdatedAt != null && message.hasOwnProperty("UpdatedAt"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.UpdatedAt);
            if (message.number != null && message.hasOwnProperty("number"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.number);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified CreditCard message, length delimited. Does not implicitly {@link models.CreditCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.CreditCard
         * @static
         * @param {models.ICreditCard} message CreditCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreditCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreditCard message from the specified reader or buffer.
         * @function decode
         * @memberof models.CreditCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.CreditCard} CreditCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreditCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.CreditCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint32();
                    break;
                case 2:
                    message.CreatedAt = reader.uint32();
                    break;
                case 3:
                    message.UpdatedAt = reader.uint32();
                    break;
                case 4:
                    message.number = reader.uint32();
                    break;
                case 5:
                    message.UserID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreditCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.CreditCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.CreditCard} CreditCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreditCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreditCard message.
         * @function verify
         * @memberof models.CreditCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreditCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.CreatedAt != null && message.hasOwnProperty("CreatedAt"))
                if (!$util.isInteger(message.CreatedAt))
                    return "CreatedAt: integer expected";
            if (message.UpdatedAt != null && message.hasOwnProperty("UpdatedAt"))
                if (!$util.isInteger(message.UpdatedAt))
                    return "UpdatedAt: integer expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            return null;
        };

        /**
         * Creates a CreditCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.CreditCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.CreditCard} CreditCard
         */
        CreditCard.fromObject = function fromObject(object) {
            if (object instanceof $root.models.CreditCard)
                return object;
            var message = new $root.models.CreditCard();
            if (object.ID != null)
                message.ID = object.ID >>> 0;
            if (object.CreatedAt != null)
                message.CreatedAt = object.CreatedAt >>> 0;
            if (object.UpdatedAt != null)
                message.UpdatedAt = object.UpdatedAt >>> 0;
            if (object.number != null)
                message.number = object.number >>> 0;
            if (object.UserID != null)
                message.UserID = object.UserID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a CreditCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.CreditCard
         * @static
         * @param {models.CreditCard} message CreditCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreditCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.CreatedAt = 0;
                object.UpdatedAt = 0;
                object.number = 0;
                object.UserID = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.CreatedAt != null && message.hasOwnProperty("CreatedAt"))
                object.CreatedAt = message.CreatedAt;
            if (message.UpdatedAt != null && message.hasOwnProperty("UpdatedAt"))
                object.UpdatedAt = message.UpdatedAt;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            return object;
        };

        /**
         * Converts this CreditCard to JSON.
         * @function toJSON
         * @memberof models.CreditCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreditCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreditCard;
    })();

    return models;
})();

module.exports = $root;
