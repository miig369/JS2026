const getPrimaryBackup = (messages) => {
    const [primaryMessages, ...backupMessages] = messages;
    return { primary: primaryMessages, backups: backupMessages };
}