import * as $protobuf from "protobufjs";
/** Namespace models. */
export namespace models {

    /** Properties of a User. */
    interface IUser {

        /** User ID */
        ID?: (number|null);

        /** User CreatedAt */
        CreatedAt?: (number|null);

        /** User UpdatedAt */
        UpdatedAt?: (number|null);

        /** User Name */
        Name?: (string|null);

        /** User Phone */
        Phone?: (string|null);

        /** User Address */
        Address?: (models.IAddress|null);

        /** User AddressID */
        AddressID?: (number|null);

        /** User CreditCards */
        CreditCards?: (models.ICreditCard[]|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IUser);

        /** User ID. */
        public ID: number;

        /** User CreatedAt. */
        public CreatedAt: number;

        /** User UpdatedAt. */
        public UpdatedAt: number;

        /** User Name. */
        public Name: string;

        /** User Phone. */
        public Phone: string;

        /** User Address. */
        public Address?: (models.IAddress|null);

        /** User AddressID. */
        public AddressID: number;

        /** User CreditCards. */
        public CreditCards: models.ICreditCard[];

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: models.IUser): models.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link models.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link models.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): models.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Address. */
    interface IAddress {

        /** Address ID */
        ID?: (number|null);

        /** Address CreatedAt */
        CreatedAt?: (number|null);

        /** Address UpdatedAt */
        UpdatedAt?: (number|null);

        /** Address street */
        street?: (string|null);

        /** Address city */
        city?: (string|null);
    }

    /** Represents an Address. */
    class Address implements IAddress {

        /**
         * Constructs a new Address.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IAddress);

        /** Address ID. */
        public ID: number;

        /** Address CreatedAt. */
        public CreatedAt: number;

        /** Address UpdatedAt. */
        public UpdatedAt: number;

        /** Address street. */
        public street: string;

        /** Address city. */
        public city: string;

        /**
         * Creates a new Address instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Address instance
         */
        public static create(properties?: models.IAddress): models.Address;

        /**
         * Encodes the specified Address message. Does not implicitly {@link models.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link models.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.Address;

        /**
         * Decodes an Address message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.Address;

        /**
         * Verifies an Address message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Address
         */
        public static fromObject(object: { [k: string]: any }): models.Address;

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @param message Address
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Address to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreditCard. */
    interface ICreditCard {

        /** CreditCard ID */
        ID?: (number|null);

        /** CreditCard CreatedAt */
        CreatedAt?: (number|null);

        /** CreditCard UpdatedAt */
        UpdatedAt?: (number|null);

        /** CreditCard number */
        number?: (number|null);

        /** CreditCard UserID */
        UserID?: (number|null);
    }

    /** Represents a CreditCard. */
    class CreditCard implements ICreditCard {

        /**
         * Constructs a new CreditCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.ICreditCard);

        /** CreditCard ID. */
        public ID: number;

        /** CreditCard CreatedAt. */
        public CreatedAt: number;

        /** CreditCard UpdatedAt. */
        public UpdatedAt: number;

        /** CreditCard number. */
        public number: number;

        /** CreditCard UserID. */
        public UserID: number;

        /**
         * Creates a new CreditCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreditCard instance
         */
        public static create(properties?: models.ICreditCard): models.CreditCard;

        /**
         * Encodes the specified CreditCard message. Does not implicitly {@link models.CreditCard.verify|verify} messages.
         * @param message CreditCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.ICreditCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreditCard message, length delimited. Does not implicitly {@link models.CreditCard.verify|verify} messages.
         * @param message CreditCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.ICreditCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreditCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreditCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.CreditCard;

        /**
         * Decodes a CreditCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreditCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.CreditCard;

        /**
         * Verifies a CreditCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreditCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreditCard
         */
        public static fromObject(object: { [k: string]: any }): models.CreditCard;

        /**
         * Creates a plain object from a CreditCard message. Also converts values to other types if specified.
         * @param message CreditCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.CreditCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreditCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
