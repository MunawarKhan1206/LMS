import { CourseTable } from "@/components/DataTables/CourseTable";

export default function Courses() {
    return (
        <div className="min-h-screen p-10">
            <h1 className="text-3xl font-bold text-center">Courses</h1>
        <CourseTable />
        </div>
    );
}