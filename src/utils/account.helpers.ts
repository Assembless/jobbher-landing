/**
 * @param displayName The display name of the user
 * @returns The initials of the provided display name.
 */
export const getInitials = (displayName: string) => {
  if (!displayName?.trim()) return null;
  const name = displayName.split(` `);
  return name[0].charAt(0) + name[1].charAt(0);
};
