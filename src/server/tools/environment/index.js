const loadSecrets = () => require("../../environment/secrets").default || {};

/**
 * Load enviroment variables
 */
const load = () => {
    const secrets = loadSecrets();

    Object.keys(secrets).forEach((key) => {
        if (!process.env[key]) {
            process.env[key] = secrets[key];
        }
    });
};

export default {
    load,
};
