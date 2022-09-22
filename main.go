package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
	"text/template"

	"github.com/gorilla/mux"
)

func main() {

	route := mux.NewRouter()

	//root for public
	route.PathPrefix("/public").Handler(http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))

	route.HandleFunc("/", home).Methods("GET")
	route.HandleFunc("/contact", contact).Methods("GET")
	route.HandleFunc("/addProject", formAddProject).Methods("GET")
	route.HandleFunc("/projectDetail", projectDetail).Methods("GET")
	route.HandleFunc("/addProject", addProject).Methods("POST")

	fmt.Println("server running")
	http.ListenAndServe("localhost:5000", route)
}

// func helloWorld(w http.ResponseWriter, r *http.Request) {
// 	w.Write([]byte("Hello World jihan hallo woy ayo pasti bisa"))
// }

func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	var fatch, err = template.ParseFiles("views/index.html")

	if err != nil {
		w.Write([]byte("message:" + err.Error()))
	}

	fatch.Execute(w, nil)

}

func contact(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	var fatch, err = template.ParseFiles("views/contact.html")

	if err != nil {
		w.Write([]byte("message:" + err.Error()))
	}

	fatch.Execute(w, nil)

}

func formAddProject(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	var fatch, err = template.ParseFiles("views/addProject.html")

	if err != nil {
		w.Write([]byte("message:" + err.Error()))
	}

	fatch.Execute(w, nil)

}

func addProject(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(r.PostForm.Get("inputName"))
	fmt.Println(r.PostForm.Get("description"))

	http.Redirect(w, r, "/", http.StatusMovedPermanently)

}

func projectDetail(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	var fatch, err = template.ParseFiles("views/projectDetail.html")

	if err != nil {
		w.Write([]byte("message:" + err.Error()))
	}

	id, _ := strconv.Atoi(mux.Vars(r)["name"])

	data := map[string]interface{}{
		"Title":   "Hello Title",
		"Content": "Hello Content",
		"Id":      id,
	}

	fatch.Execute(w, data)

}
