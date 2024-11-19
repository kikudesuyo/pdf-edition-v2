import { GroupData } from "@/stores/groups";
import { ResearchData } from "@/stores/researchData";

export const aggregateGroups = (
  researchDataArray: ResearchData[]
): GroupData[] => {
  const groupsMap: Record<number, string[]> = {};
  // 同じ groupId のメンバーを集約
  researchDataArray.forEach((research) => {
    const { groupId, name } = research;
    if (!groupsMap[groupId]) {
      groupsMap[groupId] = [];
    }
    groupsMap[groupId].push(name);
  });
  const aggregatedGroups: GroupData[] = Object.entries(groupsMap).map(
    ([groupId, names]) => ({
      groupId: Number(groupId),
      names,
      isChecked: true,
    })
  );

  return aggregatedGroups;
};
