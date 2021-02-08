export const createNameHash = name => {
    let nameToLower = name.toLowerCase();
    let splitName = nameToLower.split(' ');
    let nameHash = splitName.length > 1 ? `#${splitName[0]}.${splitName[1]}` : `#${splitName[0]}`;

    return nameHash;
}