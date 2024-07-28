async function editCampus(id) {
    const campus = prompt("Masukkan data kampus dalam format JSON:", "{}");
    if (campus) {
        try {
            const response = await fetch(`/campuses/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: campus
            });
            if (response.ok) {
                location.reload();
            } else {
                alert("Gagal mengupdate data kampus");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

async function deleteCampus(id) {
    if (confirm("Apakah Anda yakin ingin menghapus data kampus ini?")) {
        try {
            const response = await fetch(`/campuses/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                location.reload();
            } else {
                alert("Gagal menghapus data kampus");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
}
